type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <main className="desktop:w-[393px] w-full mx-auto min-h-dvh bg-black text-white">
      {children}
    </main>
  );
}
