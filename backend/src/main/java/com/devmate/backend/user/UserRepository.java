package com.devmate.backend.user;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findDistinctByEmailAndPassword(String email, String password);

    @Modifying
    @Query(value = "INSERT INTO public.user(password, first_name, last_name, email) VALUES (:password, :first_name, :last_name, :email)", nativeQuery = true)
    int register(String password, String first_name, String last_name, String email);

}
