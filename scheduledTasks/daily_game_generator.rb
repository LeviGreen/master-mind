require 'date'
require 'json'

class DailyGameGenerator
  # load the daily game data
  def load_daily_game
    data = {}
    easy_array = load_answer_array(24, method(:easy_answer))
    medium_array = load_answer_array(360, method(:medium_answer))
    hard_array = load_answer_array(366, method(:hard_answer))

    start_date = Date.new(Date.today.year, 1, 1)
    end_date = start_date.next_year

    (start_date...end_date).each do |date|
      date_string = date.strftime('%m-%d-%Y')
      data[date_string] = {
        Easy: easy_array.pop,
        Medium: medium_array.pop,
        Hard: hard_array.pop
      }

      easy_array = load_answer_array(24, method(:easy_answer)) if easy_array.empty?
      medium_array = load_answer_array(360, method(:medium_answer)) if medium_array.empty?
    end

    begin
      File.open("src/dailyGames.json","w") do |f|
        f.write(JSON.pretty_generate(data))
      end
    rescue => e
      puts "An error occurred: #{e.message}"
    end
  end
  # load the answer arrays; accept array count and answer generator as arguments
  def load_answer_array(count, get_answer_method)
    answer_array = []

    count.times do
      answer = get_answer_method.call
      while answer_array.include?(answer)
        answer = get_answer_method.call
      end
      answer_array.push(answer)
    end

    answer_array
  end
  # answer contains 4 possible colors, without duplicates
  def easy_answer
    answer = [0, 2, 3, 4]
    answer.shuffle!
  end
  # answer contains 6 possible colors, without duplicates
  def medium_answer
    answer = (0..5).to_a
    answer.shuffle!
    answer.pop
    answer.pop
    answer
  end
  # answer contains 6 possible colors, and may include duplicates
  def hard_answer
    answer = []
    4.times do
      answer.push(rand(0..5))
    end
    answer
  end
end



DailyGameGenerator.new.load_daily_game