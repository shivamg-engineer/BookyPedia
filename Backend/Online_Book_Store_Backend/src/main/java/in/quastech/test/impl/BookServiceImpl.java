package in.quastech.test.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.quastech.test.entities.Book;
import in.quastech.test.repository.BookRepository;
import in.quastech.test.service.bookService;

@Service
public class BookServiceImpl implements bookService {

	@Autowired
	private BookRepository bookRepo;

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		return bookRepo.save(book);

	}

	@Override
	public Book updateBook(int id, Book updatedBook) {
		// TODO Auto-generated method stub
		  return bookRepo.findById(id).map(existingBook -> {
		        existingBook.setName(updatedBook.getName());
		        existingBook.setAuthor(updatedBook.getAuthor());
		        existingBook.setPublisher(updatedBook.getPublisher());
		        existingBook.setDateOfPublish(updatedBook.getDateOfPublish());
		        existingBook.setCategory(updatedBook.getCategory());
		        existingBook.setDescription(updatedBook.getDescription());
		        existingBook.setPrice(updatedBook.getPrice());
		        existingBook.setRatings(updatedBook.getRatings());
		        existingBook.setPages(updatedBook.getPages());
		        existingBook.setLanguage(updatedBook.getLanguage());

		        // Optional: update file/image paths only if new ones are provided
		        if (updatedBook.getImagePath() != null) {
		            existingBook.setImagePath(updatedBook.getImagePath());
		        }

		        return bookRepo.save(existingBook);
		    }).orElseThrow(() -> new RuntimeException("Book not found with ID: " + id));
	}

	@Override
	public void deleteBookById(int id) {
		// TODO Auto-generated method stub
		bookRepo.deleteById(id);
	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bookRepo.findAll();
		
	}

	@Override
	public Optional<Book> getBookById(int id) {
		return bookRepo.findById(id);
		
	}



}
