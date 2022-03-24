package backend.friendtrip.core;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.GeneratedValue;

@Entity
public class Trip {

    private @Id @GeneratedValue Long id;
    private String title;
    private String description;
    private int difficulty;
    
    @OneToOne private User owner;

    /**
     * The constructor of a trip.
     * @param title as a String.
     * @param description as a String.
     * @param owner as a User class.
     * @param difficulty as a int.
     */
    public Trip(String title, String description, User owner, int difficulty){
        setTitle(title);
        setDescription(description);
        setDifficulty(difficulty);
        this.owner = owner;
    }

    public Trip(){}

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Trip trip = (Trip) o;
        return Objects.equals(id, trip.id) &&
			Objects.equals(title, trip.title) &&
            Objects.equals(description, trip.description) &&
            Objects.equals(difficulty, trip.difficulty) &&
            Objects.equals(owner, trip.owner);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, title, description, difficulty, owner);
	}

    /**
     * Sets the title of a trip.
     * @param title title as a String.
     * @throws IllegalArgumentException if the title is not valid.
     */
    public void setTitle(String title) throws IllegalArgumentException {
        
        if ((title.matches("^[a-zA-Z0-9ÆØÅæøå!-_ ]*$")) && (title != null) 
        && (!title.equals("")) && (title.length() < 30)) {
            this.title = title;
        }
        else{
            if(title == null){
                throw new NullPointerException("invalid title. tittle cannot be null");
            }
            throw new IllegalArgumentException(
                "invalid title, must consist of letters and numbers and cannot exceed 30 characters");
        }
    }

    /**
     * Sets the description of a trip.
     * @param description as a String.
     * @throws IllegalArgumentException if the description is empty.
     */
    public void setDescription(String description) throws IllegalArgumentException {

        if (description.equals("") || description.equals(null)) {
            throw new IllegalArgumentException(
                "description cannot be empty");
        }
        this.description = description;
    }

    /**
     * Sets the difficulty of a trip.
     * @param difficulty the difficulty of a trip between 1 and 3.
     * @throws IllegalArgumentException if the difficulty is out of range.
     */
    public void setDifficulty(int difficulty) throws IllegalArgumentException {
        
        if ((difficulty > 3 || difficulty < 1)) {
            throw new IllegalArgumentException(
                "the difficulty must be an int between 1 and 3");
        }
        this.difficulty = difficulty;
    }
    
    /**
     * Gets the title.
     * @return title as a String.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Gets the description.
     * @return description as a String.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Gets the owner.
     * @return the owner as a User.
     */
    public User getOwner() {
        return owner;
    }

    /**
     * Gets the difficulty.
     * @return the difficulty as a int.
     */
    public int getDifficulty(){
        return difficulty;
    }
}