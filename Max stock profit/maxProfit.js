/**
 * @param {number[]} prices
 * @return {number}
 
 * We use a pointer 'buy' pointing at the start of the prices list and pointer 'sell' to point at the next cell.
 
 * Loop until the sell pointer is out of the range of the list
 * First we check if the buy value of the stock is larger than sell value
 * If that's the case then it means that we can't make profit out of that and so we now point our buy value to the sell value because it's less than the previous, and we point our sell pointer to its next value.
 
 *If buy value is smaller than sell then it means we make profit, so we check right after that if the current profit is greater than our last known profit (max_profit) and if it is we update it.
 
 *Repeat the previous till we parse all the values
 
 */


 var maxProfit = function(prices) {
    let buy=0;
    let sell=buy+1;
    let max_prof=0;
    while(sell<prices.length){
        if(prices[buy]>prices[sell]){
            buy=sell;
            sell++;
        }
        else{
            if(max_prof<prices[sell]-prices[buy]){
                max_prof=prices[sell]-prices[buy];
            }
            
        
            sell++;
        }
    }
    return max_prof;
    
};
