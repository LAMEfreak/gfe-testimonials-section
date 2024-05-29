interface TestimonialCardProps {
  avatarImg: string;
  username: string;
  userHandle: string;
  cardMessage: string;
  alt?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarImg,
  username,
  userHandle,
  cardMessage,
  alt,
}): React.JSX.Element => {
  return (
    <div className="w-[340px] p-6 rounded-lg bg-white border-neutral-200 border shadow-md">
      <div className="flex mb-4 gap-4">
        <img
          src={avatarImg}
          alt={alt || ""}
          loading="lazy"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div>
          <p className="font-semibold text-lg">{username}</p>
          <p className="text-sm text-neutral-600">{userHandle}</p>
        </div>
      </div>
      <p className="text-base text-neutral-600">{cardMessage}</p>
    </div>
  );
};
export default TestimonialCard;
