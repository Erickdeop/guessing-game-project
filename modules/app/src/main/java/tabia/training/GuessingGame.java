package tabia.training;
import java.util.Scanner;
import tabia.training.services.CheckNumberService;

public class GuessingGame
{
    private int tries;
    public int getTries() {
        return tries;
    }

    public void setTries(int tries) {
        this.tries = tries;
    }
    public boolean GuessNumber(Player player, int rand){
        Scanner input = new Scanner(System.in);
        String cond;
        CheckNumberService verify = new CheckNumberService();

        while (tries != 0){
            System.out.println("\n"+HowManyTries());
            player.setPlayerNumber();

            int number = player.getPlayerNumber();

            if (verify.CheckNumber(number, rand)){
                break;
            }
            else{
                setTries(--tries);
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

    public String HowManyTries(){
        return "You still have " +getTries()+ " tries.";
    }

}
