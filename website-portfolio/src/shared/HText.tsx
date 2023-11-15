type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-Roboto md:text-5xl sm:text-3xl text-2xl text-neon-50">
      {children}
    </h1>
  );
};

export default HText;
