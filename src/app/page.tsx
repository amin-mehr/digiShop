export default function Home() {
  //console.log('test');

  const renderName = (name2: any) => {
    const name = 'Amin';
    return <span>{name}</span>;
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="">my first page</div>
      {renderName(1)}
    </div>
  );
}
