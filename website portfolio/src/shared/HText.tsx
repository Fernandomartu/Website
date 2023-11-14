type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-Roboto sm:text-5xl text-3xl text-neon-50">
      {children}
    </h1>
  );
};

export default HText;
