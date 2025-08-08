package in.quastech.test.service;

import java.util.List;
import java.util.Optional;

import in.quastech.test.entities.Book;

public interface cartService {

	public Book addToCart(Book book);
//	public Book updateCart(int id, Book updatedCart);
	public void deleteCartItem(int cartId);
	public Optional<Book> getCartById(int cartId);
    public void deleteCart(int email);
}
