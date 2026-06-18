import Image from 'next/image';

const posts = [
  { title: 'Design conferences in 2022', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-1.jpg', text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.' },
  { title: 'Best fonts every designer', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-2.jpg', text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.' },
  { title: 'Design digest #80', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-3.jpg', text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.' },
  { title: 'UI interactions of the week', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-4.jpg', text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.' },
  { title: 'The forgotten art of spacing', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-5.jpg', text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Design digest #79', category: 'Design', date: '2022-02-23', dateLabel: 'Feb 23, 2022', img: '/assets/images/blog-6.jpg', text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.' },
];

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <li key={post.title} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <Image src={post.img} alt={post.title} width={600} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
