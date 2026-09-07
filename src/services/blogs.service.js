import api from './api.service';

// Change these paths in one place if your backend uses different routes.
const BLOGS_PATH = '/blogs';

export const getBlogs = () => api(BLOGS_PATH);

export const getBlogBySlug = (slug) =>
  api(`${BLOGS_PATH}/${encodeURIComponent(slug)}`);

export const createBlog = (blog) =>
  api(BLOGS_PATH, {
    method: 'POST',
    body: JSON.stringify(blog),
  });

export const updateBlog = (id, updates) =>
  api(`${BLOGS_PATH}/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });

export const deleteBlog = (id) =>
  api(`${BLOGS_PATH}/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
