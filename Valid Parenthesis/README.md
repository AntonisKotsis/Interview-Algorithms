#Algorithm explanation

-Check every opening type of bracket '(' '[' '{'
-For every opening bracket we parse we push it's opposite into the stack i.e for '(' push ')' and increase it's check object value.
-For every closing bracket we parse we pop the last item from our stack and check if it matches the one we just parsed, we reduce the check value of this type by one
-If they are equal, means that it's the symbol we were waiting to close a set of brackets and we move to the next one, if it's false we break our loop and return false because there might be an unclosed set of brackets.
-In the end if our function didn't break due to any of the previous statements we must validate that all the values of the check object are equal to zero, which means that there aren't any unclosed brackets in the line. if it's zero then return true.
