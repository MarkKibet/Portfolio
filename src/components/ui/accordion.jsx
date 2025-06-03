const Accordion = ({ children, ...props }) => <div {...props}>{children}</div>;
const AccordionContent = ({ children, ...props }) => <div {...props}>{children}</div>;
const AccordionItem = ({ children, ...props }) => <div {...props}>{children}</div>;
const AccordionTrigger = ({ children, ...props }) => <button {...props}>{children}</button>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
