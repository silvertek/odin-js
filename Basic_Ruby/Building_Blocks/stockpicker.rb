def stock_picker (arr)
    biggest_profit = []
    profit = 0
    count = (0..arr.length - 1).to_a
    
    count.each do |j|
        count.each do |x|
            if x > j
                if (arr[x] - arr[j]) > profit
                    profit = arr[x] - arr[j]
                    biggest_profit = [j,x]
                end
            end
        end
    end
    p biggest_profit
        
end

stock_picker([17,3,6,9,15,8,6,1,10])
    