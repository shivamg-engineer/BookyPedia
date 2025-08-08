package in.quastech.test.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import in.quastech.test.entities.Book;

public interface bookService {

	public Book addBook(Book book,MultipartFile image, MultipartFile file);
	public Book updateBook(int id, Book updatedBook,MultipartFile image, MultipartFile file);
	public void deleteBookById(int id);
	public Optional<Book> getBookById(int id);
	public List<Book> getAllBooks();
}
