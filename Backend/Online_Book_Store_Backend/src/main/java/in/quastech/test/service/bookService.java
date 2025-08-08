package in.quastech.test.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import in.quastech.test.entities.Book;

public interface bookService {

	public Book addBook(Book book);
	public Book updateBook(int id, Book updatedTodo);
	public void deleteBookById(int id);
	public Optional<Book> getBookById(int id);
	public List<Book> getAllBooks();
}
