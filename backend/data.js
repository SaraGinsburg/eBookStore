import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sara',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'LaDaat',
        logo: '/images/logo.png',
        description: 'Books for increased knowledge',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Dovid',
      email: 'dovid@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Levi',
      email: 'levi@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'On the Essence of Chassidus',
      category: 'Chassidus',
      image: '/images/chas1.jpg',
      price: 4,
      publisher: 'Kehot',
      condition: 'new',
      countInStock: 0,
    },

    {
      name: 'My Rebbe (Hebrew)',
      category: 'Chassidic Thought',
      image: '/images/Rebbe1.jpg',
      price: 3,
      publisher: 'Magid',
      condition: 'new',
      countInStock: 6,
    },
  ],
};
export default data;
