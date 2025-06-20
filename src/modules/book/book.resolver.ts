import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.entity';

@Resolver(() => Book)
export class BookResolver {
  private books: Book[] = [
    { id: 1, title: 'Mathematic', author: 'Dara', price: 10 },
    { id: 2, title: 'Physic', author: 'Sok', price: 20 },
    { id: 3, title: 'Chemistry', author: 'Ratha', price: 15 },
  ];

  @Query(() => [Book])
  getAllBooks() {
    return this.books;
  }

  @Query(() => Book, { nullable: true })
  getBookById(@Args('id') id: number) {
    return this.books.find((book) => book.id === id);
  }

  @Mutation(() => Book)
  addBook(@Args('title') title: string, @Args('price') price: number) {
    const lastId = this.books.at(-1)?.id ?? 0;
    const newBook: Book = {
      id: lastId + 1,
      title,
      price,
      author: 'Unknown',
    };
    this.books.push(newBook);
    return newBook;
  }

  @Mutation(() => Book)
  updateBook(
    @Args('id') id: number,
    @Args('title') title: string,
    @Args('price') price: number,
  ) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new Error('Book not found');

    const updatedBook = {
      ...this.books[bookIndex],
      title,
      price,
    };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: number) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
