import { print } from './utils/print.js'
const main = () => {
    let result = 0
    let value = ""
    let valueRezerv = ""
    let str = ""
    let operation = ""
    let flag = false
    {
        return (state) => {
            if (state == 'АС')
            {
                str = 0
                print(str)
                value = ""
                str = ""
                operation = ""
                result = 0
            }
            else if(state == 'С')
            {

                if(str[str.length - 1] == "+" ||str[str.length - 1] == "-" || str[str.length - 1] == "x" || str[str.length - 1] == "/")
                {
                    operation = ""
                    value = valueRezerv
                    str = str.slice(0, -1)
                    valueRezerv = valueRezerv.slice(0, -1)
                }
                if (flag == true)
                {
                    str = ""
                    print(0)
                    value = 0
                    flag = false
                }
                else
                {
                    str = str.slice(0, -1)
                    value = value.slice(0, -1)
                }

                if (str.length == 0)
                {
                    print(0)
                }
                else
                {
                    print(str)
                }
            }
            else if (state >= 0 || state <= 9 || state == '.')
            {
                if (state == '.' && (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == 'x' || str[str.length - 1] == '/' || str[str.length - 1] == '.'))
                {
                    print(str)
                    str = str.slice(0, -1)
                    value = value.slice(0, -1)
                }
                str += state
                value += state
                print(str)

            }
            else if (state == '+')
            {
                flag = false
                if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == 'x' || str[str.length - 1] == '/' || str[str.length - 1] == '.')
                {
                    print(str)
                    str = str.slice(0, -1)
                }
                result = lastOperation(operation,result,value)
                operation = '+'
                valueRezerv = value
                value = ""
                str += state
                print(str)
            }
            else if (state == '-')
            {
                flag = false
                if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == 'x' || str[str.length - 1] == '/' || str[str.length - 1] == ".")
                {
                    print(str)
                    str = str.slice(0, -1)
                }
                result = lastOperation(operation,result,value)
                operation = '-'
                valueRezerv = value
                value = ""
                str += state
                print(str)
            }
            else if (state == '/')
            {
                flag = false
                if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == 'x' || str[str.length - 1] == '/' || str[str.length - 1] == ".")
                {
                    print(str)
                    str = str.slice(0, -1)
                }
                result = lastOperation(operation,result,value)
                operation = '/'
                valueRezerv = value
                value = ""
                str += state
                print(str)
            }
            else if (state == 'x')
            {
                flag = false
                if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == 'x' || str[str.length - 1] == '/' || str[str.length - 1] == ".")
                {
                    print(str)
                    str = str.slice(0, -1)
                }
                result = lastOperation(operation,result,value)
                operation = 'x'
                valueRezerv = value
                value = ""
                str += state
                print(str)
            }
            else if (state == '=')
            {
                result = lastOperation(operation,result, value)
                operation = ""
                if (result % 1 != 0)
                {
                    result = Math.round((result)*100)/100
                }
                //console.log(result)
                print(result)
                str = result
                flag = true
                value = result
            }
        }
    }

}

const lastOperation = (str, result, arg) =>
{
    if (str == '+')
    {
        return result += Number(arg)
    }
    else if (str == '-')
    {
        return result -= Number(arg)
    }
    else if (str == 'x')
    {
        return result *= Number(arg)
    }
    else if (str == '/')
    {
        return result /= Number(arg)
    }
    else
    {
        return Number(arg)
    }
}

export default main