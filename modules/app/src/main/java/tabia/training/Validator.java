package tabia.training;

public class Validator {
    public boolean isNumeric(String string){
        int intValue;

        if (string == null || string.equals("")){
            return false;
        };
        try {
            intValue = Integer.parseInt(string);
            return true;
        }
        catch (NumberFormatException e){
            System.out.print(NaN());
        }
        return false;
    }
    public String NaN(){ return "Input is not a number"; }
}
