const Tabs = ({ children, ...props }) => <div {...props}>{children}</div>;
const TabsContent = ({ children, ...props }) => <div {...props}>{children}</div>;
const TabsList = ({ children, ...props }) => <div {...props}>{children}</div>;
const TabsTrigger = ({ children, ...props }) => <button {...props}>{children}</button>;

export { Tabs, TabsContent, TabsList, TabsTrigger };
