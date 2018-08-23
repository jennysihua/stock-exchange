package io.github.jennysihua.stockexchange.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import io.github.jennysihua.stockexchange.model.User;
import io.github.jennysihua.stockexchange.model.Stock;


public interface UserRepository extends CrudRepository<User, String> {
}
