type MastersLayoutProps = {
  children: React.ReactNode;
};

export default function MastersLayout({ children }: MastersLayoutProps) {
  return <section className="masters-layout">{children}</section>;
}
