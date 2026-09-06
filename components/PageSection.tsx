import { ReactNode } from "react";

interface PageSectionProps {
  judul: string;
  children: ReactNode;
}

const PageSection = ({ judul, children }: PageSectionProps) => {
  return (
    <section className="page-section">
      <h1>{judul}</h1>
      <div className="page-section-body">{children}</div>
    </section>
  );
};

export default PageSection;