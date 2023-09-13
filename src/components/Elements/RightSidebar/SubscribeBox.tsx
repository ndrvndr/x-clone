export default function SubscribeBox() {
  return (
    <div className='flex flex-col justify-start px-4 py-3 rounded-xl bg-dark-2 gap-y-3'>
      <h3 className='text-heading4-medium text-light-1 font-bold'>
        Subscribe to Premium
      </h3>
      <p className='text-light-1 font-semibold'>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className='w-fit px-5 py-2 rounded-full bg-primary-500 text-white font-bold'>
        Subscribe
      </button>
    </div>
  );
}
