// C++ program to display "Hello World"
 
// Header file for input output functions
#include <iostream>
#include <conio.h>
using namespace std;
 
// Main() function: where the execution of program begins
int main()
{
    // prints hello world
    int arr[5];
    int start,mid,end,n,flag=-1,num;
      
    cout << "Enter find element and length of array";
    cin>>n>>num;
      for (int i = 0; i < num; i++)  
    {  
        cout << " arr [" << i << "] = ";  
        cin >> arr[i];  
    }
    start=1; 
      end=num-1;
    while(start<=end){
    	mid=(start+end)/2;
    	if(n==arr[mid])
    	{
    		cout<<"Value found";
    		flag=1;
    		break;
		}
		else if(arr[mid]>n)
		{
			end-mid-1;
			
		}
		else{
			start=mid+1;
		}
	
	}
		if(flag==-1)
		{
			cout<<"Not found";
		}
    return 0;
}