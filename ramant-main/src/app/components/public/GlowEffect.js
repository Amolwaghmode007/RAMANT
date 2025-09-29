// components/GlowEffect.jsx
const GlowEffect = () => {
  return (
    <>
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </>
  );
};

export default GlowEffect;