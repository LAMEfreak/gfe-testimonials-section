import {
  testimonials1,
  testimonials2,
  testimonials3,
} from "../testimonialData/testimonialData";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialGrid = () => {
  return (
    <div className="grid grid-col-1 justify-center md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div className="flex flex-col items-center gap-8">
        {testimonials1.map(
          ({ avatarImg, username, userHandle, cardMessage }) => {
            return (
              <TestimonialCard
                avatarImg={avatarImg}
                username={username}
                userHandle={userHandle}
                cardMessage={cardMessage}
              />
            );
          }
        )}
      </div>
      <div className="flex flex-col items-center gap-8">
        {testimonials2.map(
          ({ avatarImg, username, userHandle, cardMessage }) => {
            return (
              <TestimonialCard
                avatarImg={avatarImg}
                username={username}
                userHandle={userHandle}
                cardMessage={cardMessage}
              />
            );
          }
        )}
      </div>
      <div className="flex flex-col items-center gap-8">
        {testimonials3.map(
          ({ avatarImg, username, userHandle, cardMessage }) => {
            return (
              <TestimonialCard
                avatarImg={avatarImg}
                username={username}
                userHandle={userHandle}
                cardMessage={cardMessage}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
export default TestimonialGrid;
