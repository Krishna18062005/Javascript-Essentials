import java.util.*;
public class Hello {
    public static boolean containVowels(String Input){
        for (char i:Input.toCharArray()){
            if("aeiouAEIOU".contains(String.valueOf(i))) return true;
        }   
         return false;
    }

    public static void main(String[] args) {
		//atleast 1 vowel program
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		boolean rs=true;
		for(int i=0;i<n;i++){
		    String a=sc.next();
		    if(containVowels(a))
		    continue;
		    else{
		         rs=false;
		        break;
		    }
		    
		}
		System.out.print((rs)?"yes":"no");

	}
}
