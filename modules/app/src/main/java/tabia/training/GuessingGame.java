package tabia.training;
import java.util.Scanner;

public class GuessingGame
{
    private int tries;
    public int getTries() {
        return tries;
    }

    public void setTries(int tries) {
        this.tries = tries;
    }
    public boolean guessNumber(Player player, int rand){
        Scanner input = new Scanner(System.in);

        String cond;

        while (tries != 0){
            System.out.println("\n"+HowManyTries(tries));
            player.setPlayerNumber();

            int number = player.getPlayerNumber();
            if (CheckNumber(number, rand) == true){
                break;
            }
            else{
                tries--;
            }
        }
        if (tries==0){
            System.out.println("You've lost the game :( the number was "+ rand);
        }

        System.out.print("Want to try again? Yes(y) or No(n): ");

        while(true){
            cond = input.nextLine();
            if (cond.equalsIgnoreCase("y") ||
                    cond.equalsIgnoreCase("yes")) {
                return true;
            }
            else if (cond.equalsIgnoreCase("n") ||
                    cond.equalsIgnoreCase("no")) {
                return false;
            }
            System.out.println("Not a valid input.");
        }
    }
    public boolean CheckNumber(int number, int rand){
        if (number == rand){
            System.out.println("Congratulations! You guessed the number");
            return true;
        }
        else if (number < rand) {
            System.out.println("The number is greater than this.");
        }
        else if (number > rand) {
            System.out.println("The number is lesser than this.");
        }
        return false;
    }
    public String HowManyTries(int tries){
        return "You still have " +tries+ " tries.";
    }
}
