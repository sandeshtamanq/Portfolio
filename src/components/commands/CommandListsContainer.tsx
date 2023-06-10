const CommandListsContainer = ({ data, css, header }: any) => {
  return (
    <div className="space-y-3">
      {header && <div>{header}</div>}
      <div className="space-y-5">
        {data.map((cmd: any, index: number) => (
          <div key={index}>
            <div className={`${css}`}>{cmd?.key}</div>
            <div className="ml-4">-{cmd?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandListsContainer;
