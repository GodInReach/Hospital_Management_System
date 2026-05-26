type BlankPageProps = {
  title: string;
};

export function BlankPage({ title }: BlankPageProps) {
  return (
    <main className="blank-page">
      <h1 className="sr-only">{title}</h1>
    </main>
  );
}