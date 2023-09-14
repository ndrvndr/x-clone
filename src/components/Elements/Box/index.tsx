interface BoxProps {
  heading: string;
  children?: React.ReactNode;
}

export default function Box(props: BoxProps) {
  const { heading, children } = props;

  return (
    <div className='flex flex-col justify-start px-4 py-3 rounded-xl bg-dark-2 gap-y-3'>
      <h3 className='text-heading4-medium text-light-1 font-bold'>{heading}</h3>
      {children}
    </div>
  );
}
