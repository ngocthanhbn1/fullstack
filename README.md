.main-nav a {
    color: #1d4ed8;
}

.main-nav > ul > li > a {
    background: #f1f5f9;
}

.post-content h2 ~ p {
    color: #0f172a;
}

.post-content h2 + p {
    color: #64748b;
}

.post-meta .author a {
    color: #f97316;
}

.post {
    background: white;

    .post-title {
        color: #0f172a;
    }

    &.featured {
        background: #fefce8;
    }

    &:hover {
        background: #f8fafc;
    }

    &:hover .post-title {
        color: #2563eb;
    }
}

.post-content a:link {
    color: #2563eb;
}

.post-content a:visited {
    color: #9333ea;
}

.post-content a:hover {
    color: #1e40af;
}

.post-content a:active {
    color: #1e3a8a;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

button:hover,
.btn:hover {
    background: #3b82f6;
}

button:active,
.btn:active {
    background: #1d4ed8;
}

button:disabled,
.btn:disabled {
    background: #94a3b8;
    color: #cbd5e1;
}

input:focus {
    background: #eff6ff;
}

.comparison-table tbody tr:nth-child(odd) {
    background: #f8fafc;
}

.comparison-table tbody tr:nth-child(even) {
    background: white;
}

.comparison-table thead tr:first-child {
    background: #0f172a;
    color: white;
}

.comparison-table tbody tr:last-child {
    background: #dbeafe;
}

.steps li:first-child {
    color: #16a34a;
}

.steps li:last-child {
    color: #dc2626;
}

.steps li:nth-child(3) {
    background: #fef3c7;
}

.sidebar .widget:not(:last-child) {
    background: white;
}

.lead::first-line {
    color: #0f172a;
}

.lead::first-letter {
    color: #2563eb;
}

.quote::before {
    content: '"';
    color: #cbd5e1;
}

.quote::after {
    content: "";
    color: #cbd5e1;
}

.steps li::marker {
    content: "";
    color: #2563eb;
}

::selection {
    content: "";
    background: #bfdbfe;
    color: #0f172a;
}

.badge::before {
    content: "";
    background: #ef4444;
}

input:required {
    background: #fffbeb;
}

a[href^="https://"] {
    color: #2563eb;
}

a[href$=".pdf"] {
    color: #ea580c;
}

[class~="btn"] {
    background: #e2e8f0;
}

[lang|="vi"] {
    color: #0f172a;
}

tr[data-priority="high"] {
    background: #fee2e2;
}
