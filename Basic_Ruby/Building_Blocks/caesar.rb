def caesar(input, num)
    words = input.split ' '
    
    coded_phrase = []
    words.each do |word|
        coded_word = []
        word.split("").each do |letter|
            x = letter.ord
            coded = 0
            if x >= 65 && x <= 90
                rollover = 90 - x
                if rollover < num
                    coded = (64 + (num - rollover)).chr
                else
                    coded = (x + num).chr
                end
            elsif (x>=97 && x <=122)
                rollover = 122 - x
                if rollover < num
                    coded = (96 + (num - rollover)).chr
                else
                    coded = (x + num).chr
                end
            else
                coded = x.chr
            end
           
            coded_word << coded
        end
        
        coded_phrase << coded_word.join
        
    end
    
    return coded_phrase.join ' '
end

puts caesar("What a string!", 5)
    