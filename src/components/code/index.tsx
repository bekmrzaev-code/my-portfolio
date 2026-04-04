import React from "react";

interface CodeSnippetProps {
    title?: string;
    code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ title, code }) => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "#1e1e1e",
                borderRadius: "10px",
                overflow: "hidden",
                fontFamily: "monospace",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
        >
            {/* Header */}
            <div
                style={{
                    backgroundColor: "#2d2d2d",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#aaa",
                }}
            >
                <div style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: 10, height: 10, background: "#ff5f56", borderRadius: "50%" }} />
                    <span style={{ width: 10, height: 10, background: "#ffbd2e", borderRadius: "50%" }} />
                    <span style={{ width: 10, height: 10, background: "#27c93f", borderRadius: "50%" }} />
                </div>

                <span>{title || "code.tsx"}</span>
            </div>

            {/* Code */}
            <pre
                style={{
                    margin: 0,
                    padding: "12px",
                    color: "#eaeaea",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    overflowX: "auto",
                }}
            >
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeSnippet;