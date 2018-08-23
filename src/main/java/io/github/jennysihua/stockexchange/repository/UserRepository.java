package io.github.jennysihua.stockexchange.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import io.github.jennysihua.stockexchange.model.User;


public interface UserRepository extends CrudRepository<User, String> {
    List<User> findAll();
}
