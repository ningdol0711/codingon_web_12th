interface PostItemProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className='PostItem'>
      <div>
        <span className='id'>No. {post.id}</span>
        <span className='title'>- {post.title}</span>
      </div>
      <p className='body'>{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
