const TailwindAccordion = ({ title, children }) => {
  return (
    <details className="group border-b border-white/10 bg-transparent text-white">
      <summary className="flex cursor-pointer items-center justify-between p-4 font-medium list-none">
        <span>{title}</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
      </summary>
      <div className="p-4 text-zinc-400">
        {children}
      </div>
    </details>
  );
};

export default TailwindAccordion