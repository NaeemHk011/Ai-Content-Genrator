'use client';

import React, { useEffect, useState } from 'react';
import Loader from '@/components/ui/Loader';

export interface AIOutputType {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string; // Date and time
}

const HistoryPage = () => {
    const [historyData, setHistoryData] = useState<AIOutputType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch history data from API
    const fetchHistory = async () => {
        try {
            const response = await fetch('/api/history', {
                headers: {
                    'Cache-Control': 'no-cache', // Disable caching
                },
            });
            const data = await response.json();

            console.log('Fetched Data:', data); // Log the data

            if (data.success) {
                setHistoryData(data.data); // Set the fetched data
            } else {
                console.error('Error fetching history');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory(); // Call the fetch function on component mount
    }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };

    if (loading) {
        return <Loader />; // You can replace this with any loading component
    }

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">AI Output History</h1>

            {historyData.length === 0 ? (
                <p>No history found.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">S.No.</th> {/* Serial Number */}
                            <th className="py-2 px-4 border-b">AI Response</th>
                            <th className="py-2 px-4 border-b">Template Slug</th>
                            <th className="py-2 px-4 border-b">Created By</th>
                            <th className="py-2 px-4 border-b">Created At</th> {/* Date and Time */}
                            <th className="py-2 px-4 border-b">Actions</th> {/* Actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item, index) => (
                            <tr key={item.id}>
                                <td className="py-2 px-4 border-b">{index + 1}</td> {/* Serial Number */}
                                <td className="py-2 px-4 border-b line-clamp-2">{item.aiResponse}</td>
                                <td className="py-2 px-4 border-b ">{item.templateSlug}</td>
                                <td className="py-2 px-4 border-b">{item.createdBy}</td>
                                <td className="py-2 px-4 border-b">{item.createdAt}</td> {/* Date and Time */}
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => copyToClipboard(item.aiResponse)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Copy
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default HistoryPage;
