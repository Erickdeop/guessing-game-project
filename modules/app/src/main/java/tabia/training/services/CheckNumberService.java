package tabia.training.services;

public class CheckNumberService {

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
}
