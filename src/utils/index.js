import toast from "react-hot-toast";
export const getBlogs = ()=>{
    let blogs =[]
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}
//save
export const saveBlog = blog =>{
    let blogs = getBlogs();
    const isExist = blogs.find(blg=>blg.id === blog.id);
    if (isExist) {
        return toast.error('Already exist in the bookmarks!');
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Added to the bookmarks!')
}
// delete 
export const deleteBlog = id =>{
    let blogs = getBlogs();
    const remaining = blogs.filter(blg=>blg.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Blog removed from the bookmarks!')
}
