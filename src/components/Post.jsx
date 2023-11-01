import PostDescription from "./PostDescription";
import post from "../items";
import HeroList from "./HeroList";

const Post = () => {
  const item = post.data.postArray;
  console.log(item);
  return (
    <>
      {item.map((post, index) => {
        return (
          <div key={post.id}>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 ml-2">
                <img
                  className="w-[25px] h-[25px] rounded-full"
                  src={post.profilepic}
                  alt="profilepic"
                />
                <h4 className="text-[.6rem] font-semibold">{post.name}</h4>
              </div>

              <div className="flex items-center justify-around mr-2">
                <span className="text-[.5rem] text-slate-400 pt-[.15rem]">
                  {post.time} ago
                </span>
              </div>
            </div>
            <img
              className="w-[250px] h-[250px] mx-6 mt-1 rounded-lg"
              src={post.image}
              alt=""
            />
            <div className="flex items-center justify-between px-5 py-1 h-[25px]">
              <div className="flex gap-3">
                <button className="flex  w-fit h-fit gap-1 pl-[.25rem]">
                  <img className="w-[15px]" src="../fav.svg" alt="" />
                  <span className="text-[10px]">{post.like}</span>
                </button>
                <button className="flex  w-fit h-fit gap-1">
                  <img className="w-[15px]" src="../circle.svg" alt="" />
                  <span className="text-[10px]">{post.comment}</span>
                </button>
              </div>
              <div>
                <button>
                  <img
                    className="w-[18px] mr-[.15rem] pt-[.23rem]"
                    src="../more.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div>
              <PostDescription 
                id ={post.id}
                caption={post.caption}
                comment={post.comment}
                name={post.name}
              />
            </div>
          </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
