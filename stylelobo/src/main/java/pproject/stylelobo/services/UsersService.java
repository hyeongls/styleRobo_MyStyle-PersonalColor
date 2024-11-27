package pproject.stylelobo.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.repository.UsersRepository;

@AllArgsConstructor
@Service
public class UsersService {
    private UsersRepository usersRepository;

    @Transactional
    public Users userFindByUserName(String userName){

        return usersRepository.findByUserName(userName)
                .orElseThrow(() -> new IllegalArgumentException("User not fund"));
    }


}
