import { testimonials } from "../testimonialData";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialGrid = () => {
  return (
    <div className="grid grid-col-1 justify-center md:grid-cols-2 xl:grid-cols-3 gap-8">
      {testimonials.map(({ avatarImg, username, userHandle, cardMessage }) => {
        return (
          <TestimonialCard
            avatarImg={avatarImg}
            username={username}
            userHandle={userHandle}
            cardMessage={cardMessage}
          />
        );
      })}
    </div>
  );
};
export default TestimonialGrid;
