export default function Button({ mobile, desktop }) {
  return (
    <button
      className={`${mobile} desktop:${desktop} desktop:justify-center bg-gradient w-[163px] py-[8px] rounded-[22px] text-button text-pureWhite hover:opacity-60`}
    >
      Request Invite
    </button>
  );
}
