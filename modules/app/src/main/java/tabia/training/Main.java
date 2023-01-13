package tabia.training;

import java.util.Random;

public class Main {
    public static void main( String[] args ) {

        Player player = new Player("");
        // Get random number
        Random random = new Random();

        // Instantiate the game class
        GuessingGame guessingGame = new GuessingGame();
        boolean gameOn = true;

        // Continue playing
        while (gameOn) {
            int rand = random.nextInt(100);
            guessingGame.setTries(5);
            gameOn = guessingGame.GuessNumber(player,rand);
        }
    }
}
