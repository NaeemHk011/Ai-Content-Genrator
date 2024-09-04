import React from 'react';

declare module 'react' {
    interface IntrinsicElements {
        div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        // Add other elements if needed
    }
}
