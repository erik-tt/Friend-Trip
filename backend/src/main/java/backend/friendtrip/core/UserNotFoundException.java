package backend.friendtrip.core;

class UserNotFoundException extends RuntimeException {

  /**
     *
     */
    private static final long serialVersionUID = 1L;

UserNotFoundException(Long id) {
    super("Could not find user " + id);
  }

  UserNotFoundException(String username) {
    super("Could not find user " + username);
  }
}