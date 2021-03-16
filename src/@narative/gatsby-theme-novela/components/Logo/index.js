import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="30" height="30" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.00666667)"/>
    </pattern>
    <image id="image0" width="150" height="150" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAaRUlEQVR4Ae1dB9QV1dXdT1S62MAKIihqbKCxBEss2A027IpCFBONNbjUmCzJb4vEsvRPVCzBEmwIGjsWYkEUMWIXCyGKAmJvoKKerO28k3ten5k3M2/e++as9X1z3+33zJ5bzj33XCCjjAMxcCAXQ54Ny1KA9gC6AVgBQA8AywNYBkBXAGwr/74BIA2rZGnB3wL4Iv/3CYAPAHwO4JNcuupZWvMqPk0LLAGWBdAHwCYANgOwE4A1q7S1GYMeAzANwHQALwKYnQMWN0NDmgZY+d5ofQC7ABgOYK1mYHAMdbwXwO0AHs8DLU29bwzNjSFLgkmAbQS4UgDJ/kp4sEiAMwToJ94wH8NbaKEsBegrwOgMSCVAqvZxzRFgmHhzzBZCQwRNEWATASZlgAoEqHJg+z8BVozglTR3FgKsI8DkDFB1A6oYZGcK0Lm50RGi9gJ0EeCSDFCRA8oCbLEA+yY9B2vYqlC81d2dADqEwGSWJDgHngBwYA6YFzxp8BRLBE9SXwoBOggwBsADGajq42XA1NsAmMveK2C6UNET7bG4LAbAL4dS8Ywax4HLAZyYA76LqwqJAUuAvQHcEVdDsnwDc2A2gK1zwNzAKX0kiH0o5KRRgFMzUPl4G8lG4fbXLAH6x1FsrD1WfiVyIYBT4qh8lmdkHNgmB0yJLLf8bn+U+f0vrwxU/2NFszi2ygFTo6psbD2WACMB/Dmqimb5xM4BTuQH5ICXoygpFmAJcACAW6OoYJZHohz4kqpIOU8nrK6CIweWABsBeKGuWmWJG8kB6n4NrFcUEemqUDxNTQo+M2peDlBpclS91Y8MWPnJ+v8DWKXeSmXpG84Bbl7vWE8tIhsKBdgdALUbM2oNDnwGoFfO078P3KJIeiwBOgG4JnDpWYI0c4CHUijYDkWRAAvAiGwIDMX/tCc6XbwDK4HrWfdQKMByVOrPH7sKXIEsQeo5cD2AYUGPokXRYx2TgSr14KingofC00oJlEddwMr3VqcHKjGL3GwcWBLACUErXRewAOyT9VZBWd6U8YcLsGqQmocGlgBMG3rVEKSSWdyGc4Dq4/sFqUVoYAFYD8C6QQrL4jY1Bw4XgMOiL6oHWLSVkFHb4cAACkz9NjcUsPLD4EF+C8nitQQH2FvxQIYvCgWs/GGIjX2VkEVqJQ7snu9UarYpLLA2yI5u1eRtK0agpZ+OfhoWFlhb+8k8i5MwBzp2BLbYIs5CuX9Im2Q1KTCw8uoxtFOVUZo40Lkz8PrrwNNPAyeeGGfNVveTeWBg5YfArfxknsVJkANrrAH07OkVeEJgQXmQim7qJ3IYYHF10M5P5lmcBDnw2mvAnDlegX36AJv6ev9hKrhKftSqmjYMsCjLyI7IV2VrAwJpX+amm1zBhx/u3NG6qLpcEzc1I0Rbpyy3WDlw440u+71p0aBxlAGrcbyPvuRXXgE4JJI451qWhqUjp4V+cmxtYOVywJFHAqNGAZzQduNqucVpxgzXwM03d+7oXLT10CW67PI5CbB+U1jgW3ttkeeflwL66iuRI4+01u5az33mma7JZ5wRR/toqbl7LWD53q2ulVGqwrkqeuIJYKWVCqvVqRMwdizA5+U0EdWCpEMhm9a7d1wN/KFWxq03FHboADz4oAPV/PnAhRcCU429i4svBtZstUss8q/6P/9x77yZhv7UD4WXXuqGgjffFOnSxRsOllpK5L77XNj998cxTDQ+z403jruNHAp5V1G0lGpgrbKKyOLFHmN/+EGkf//CF92jhwjnWUrbblsY3gq3X2ywgbZO5Mkn42ifL2C11lB4xhnAkvlp43XXAc8/X/hVLVgAXH218zvrLOduFdcPZvrz1VfN06rU9ljLLSeycKH3tbK3Wnfd8l/r6quLfPed+6rXWqt8vGbtvdgLK916axxta2M91q9/DVBthPTII8DMmeW/1nffBR591IUdfbRzR+VaailgxAhgx7rsaoSrDQWjSp/w+sPGUOsMhcOGOQ7WEiVMmODi7kLdtQiJQtnbbgPGjAEeeADYc88IM/eRlQXWxx/7SJCSKKkcCu2Ede5ckSWWqD4EcJLP4VJp+eWrxw8yLF58sebqPefPF8nlosu/Vl3+9jdX/hFHxFFuGxoKDzzQfXY33wzYCawLca558won9lFtfXD4O/lkVw5dFNJuRoWAhGjLLV1BL73k3Am7WmMoPIAmT/N0Oy8f9UHcsFXqH4Gpc2oTXHGF5gh8y6ue86RzP/0d17NrV2A9HveE93FlwKqD0yusAPTjTSoAKE546il/mb36qotXrxR+112B8eOBJfLf6aRJhQuEpOY6223n2vTyy8Dixl0f3fx7hTvs4JjJF+qXqB+utNpq6gr+JKj+8Q8nP5s8GRgyxAM5c/v6a8D2jsFL8J/CrkLvu89/uhhiNv9QuJVRv+fGs1+yS/EeIRViuaIkqJZe2it1yhRgjz2AnXZyoo/776895/Nb52rxuBo9+GAX4557nLsBrubvscICy0qlqe0QlAieu+8GKLMiTZsGEGjsoexiwu+cL2j5xfE5DOoH8tlnhZvuxXHT+Dt14gaVon/9dbCltRVRzJwZLO1OO4l8+61b1k+d6ja7u3VzYd98I9K1a7C8a4kTKoVfdZWrD92V4tXv3wbEDd27A+3yB4ZmzQr2HdqV2jff+E/Loe7ee11PNX06sPPOwJe81AGeQFR7sYceAr74wn/eYWNyNXjYYS71uHHO3SBXc8+xehnjJ2++GYyFyy/v4tth0fmWuvbZB7jzTgcq6nhx8aCgYopf/MKlS2oYPP54N6fjltXjj7s6NMjV3HMsu32hZ+r8MpJiCiU/vR1BRZGC9pAE1aBBwKJFmosXtttu3m8ORnckcO8nFw4nneTqwCNgLLvB1Nw91sorO/YFlRX17evSvvWWc5dzHXRQbVAx3c9/DiyzjJfDk08CnETHTRwCOSUgccfhssviLtFX/s0NLF3ms6lWfOCn6RvQYE6eqgGLm9vsBbSnomYE51S2p9J8OP9SSmK5T4Hs6ca2MIfe997TGjT02dxDoSr1kYV2nuOHpRtu6GJVAtbQocC11wKUEZEIKgpEK032raZEEsDabz9g7bVdO84917mbzZUqccNpp7kl9tFH+19id+/u0n35pUi7dqVpmZ/VgPjnP0Xaty+Np8t3m+fbb1eOp/GjeM6Y4drxyCPJlAm0AXGD7bF0n87Pl2p1pB5+GPj++8JUVBq86irXU1FsUK2nYmo7DAbZWios2f+vI44A7Ob5aaf5T5tAzOYeCu3wZ+dbtRi3114uBpXxLBFUVlGQoCJoam3oUhKvZDVU1S/KJ3cK/mxuRea20rPPRllC8nmlaig86CA3FPzxj/6GgmWXdZJxpl5jDZdu+HCXH10PPCCy9NIuvNrwxeFPaeWV/aWpll+1sLPP1pJEvv9eZJ114i2vsC6+hsLAyEwVsLbf3jF4zBh/zD3uOJeGWzHKtGHDCudUnLP4BdWqq7o8X3/d5al5R/mk9iu3r5SuvDLe8krr3gaAtd56yl6Re+6pzWCqCM+a5dKMGOGl2XVX78vXEIKqQ4fa+SnThwzRlCJ+9+m4EGD5vXv7L4fl3XyzK+uTT0TYA2s9knm2AWBRV13pjTdqM5gAUlq0SKRzZ5EBA0ToVnriiWCg4su0eu5Dh5avxworiIwbJ3LnnSLbbSeiK7ovvvC/Ub3ZZlpL76kfRjKA0na1AWCRoe+/7zGZWg7VxAGM+/jj7sXcdJNIr14iH37o/J5+WqRTJ2Wg/yfTKV1zjci8eSKHH+7Sd+wo8swzGqP0ueGGLm4lkLC3ffFFl/bZZ5M9pOHq1UaAddddjtnFR+odM0TsfIwpttpKhL2c0uzZIjz0atP4cS+5pDvWr3nxyWFK0596qg0pddsFhKYpfh5zTGG6LbZw+RfHjfd3GwGWtQf1m99UZvZTT7kXc9ttIpMnu9+ffSZCe1phXggBWokIOub5739XiuH51wI051EEqtLf/x6urmHaV5rGF7Cae6+Qa9pnnnErW2oblCNa9dNjUSoM3X57LyY3bgcPBoKq3Wg5Aweqq/RJnS+aa6x1WKPWZvXo0c7s48KFwKkteJtfpOIGTkZHjRLZeefwXyA1NinLIbHnKd6eWXHFwq+dB0gtnXiiVzZ7lxNOEDn2WBGaPOKXSk3RPfYorRt7N9adcSZOtLkVuldayZvHFfp6czDtgWj9prRXcH4//WmhGCQeK32uvGp18cJ89VilX1kNn8iANXCgM+JBFd4wk2ZlAuVRSrvsUsgkrsIq0Q03eHFpQ2vaNBeLq7zrr3e/reEQigc+/9wL416lFV+4FJ6L6bgaLKYDDxThapBEoGs7ip/FE3aqUOvwWhw3ud8pBpYFFZnLF1Xc0wRhFL9iJStHspJ5DdfnO+944ga+KMrALNmVIv3328+9/PHjXUwKZS1RcGlXnpxgn3WWjSFCCT3bqkTjcJXayo1wSz/7WeW4lfKI3j+lwCoGFRnH3qEeBvTt69j/wQfeV01zRTrcuFDPRa2FLbcUoUZCNTGApjv0UK9+TGPpssvsL5GxY0Ws7YSTTxZhb2xp5EhPqKl+zz1Xvu3s6Wz9Kcaoh0fRpU0hsCgYVBtWylg+99qrfqZNn+5y5J6fHdpciOe66CKRHXf0hiEbVinNUUeJcC73yis2tsi55xb+5k7AhRc6P7UuSJ/XXhNhPjRY0rOni8MertxLv+46F4c9aPIS9vL18qk2U2NGVRoceo5FUNk9LmUbgeZ3T67cC1C/44/XHAsl6c7Xc/ElUThajvQoWXEY51IUSFriQuFPf3I+lNizLuVkVpTsW3GG3Yq6997SF8ghz5L2mNrWxj5T1GNVAhWZxzlLFIzi+T2dVNuXYs//Wf9qbs6DbrnFxbBbPupLzQcrnKU8je2g6aBi+uUvC9vIuZdSsdU9zvk4SVeigmEU/IkuD1/Ail+OxRO61Hlq397r/l58sdDa3sSJpd1iGB+e37OXFDEPnkq2Vl9svpQHHXts6YnhDz7wjnTxGJUSTXwXE+8FXN9c26g6WLNnu5iUmfGwA9WbLemBC/p9+qkNAUaOBNZZx/OjCvTw4YXhrfor0FBY3FO9+qon11GVX85Bllkmmi+SIgO7ItMvvvjJ4fjyy0WofsKvmLIrJfZ4NGdNf+p3Wfr0UycioP/gwS6UeaoYgCICrha56iwWfWivwVWm0gUXuPZzwWGtOv/hDy5M0zb+6avHCox/38DadNNCJnFfjquwPfdUlopMmRIN46jiYrdsXAnORdBQPkWhpX05BDYn7QTO1lu7MAscXp1SPO/hR6P06KMunc27kpvXrijpEMq4d9yhvt5wqGCtlE9j/H0BKx7VZBr/ooFZNbbB2xJ45k6HGYWzDh/6O8yTKsk0zqFbNsyDJny23Rbokr9LiLaweFeyVWXWsj7/vPw9ynfdBVCFmbr0VP3lto8STSDZc4xBzRTZw7Isn8QTPvYqOB47++47LbH1nzV7rDXXFFmwwH15HBK4vNavy16cNGiQ89fwIE8KGrmqskRZEvN4+GHnyxVjkHzLxaWIQomiAMahxsRvfxt8OB89WnMSoeYq1WrmzHF+uiNQrh6N9/PVYwX+EqoCi/MWAkmJhmYJNGUGZTFKnF8F0dLUPPRJeZBduTHf22/35ERUFdZ5HOc/UczjrLiB8iitR5in3S464ACR889XrnjzOO5vhsk3mTQJA4vanFa/6aOPCmU3bPT++zsG1ju/4ldtictynZP8/vcu5MYb639JXBgoUJlzv3715TlhgqsfezwrSD3ppPryjh9cCQKLjH/hBccsbrButFEpgy65xMU555zScD9MYU/F7Q1L3Jaxm9hW/ymK+3KsSvPHH4ert20b9cGUuGhQovyqnj1TW0Z87oSAVbwiozCRe2rlGsbVk1I5dZRyaawfy7I3eDEv6o7b7Q5rUI1zPZs+rNsOVcUCzTB5/vWvyoXCJ/dRw+SXbJoEgMWh56GHHHPYpVebkNt9wtVWC8ZEDrV2P5ClPvZY6UGEU05x9al3c1tfGG/RUqK+lvqHfZbTuuBBi7D5JZsuAWBZ2wlUttt778rM4SReid1/EGZQJ/yttzS196SelSrk2by41aJ0yCHByrH5qJu9pJ0DsUfUsLBPHvrgHFSJU4e4D7mGrWtpugSAZfXN7amU0sqI7LOPslFk0iT/L4cHJKz4grlQck4Jd3E5fGF2o5saCcVxgv7eYQdX7yjmV1o+deW5aiY15hhXWN74AlZ9AtLzzgO45/b220CtPb8BA5xoo/geQRdS6Np9d+DWW52gk6G/+x1w/vmF8fTXRhu5PcnnnovG8BkFrUqPPaau+p80zNazp6cPX8mMUv2lNCyH+oBFzF9yib/KW2DNmFE7zZlnAmef7Sy+0NAZN3SrAfgnP3H5RmUkwwIratue3KRuQVDxJdQHLPcaa7vYmyhRw6ESUQvi+usLbaWzR6TFl1pbJxZY9kqTSmXV8ueWlAVWlD1WrbLbWnhVybvOH4qfVsebc4pKshru7tstH8alxoIVJxTnbX/fffePU5Yf/1Vbndo01dxcjChR5bncvK5a+tYM8zXHil8fi1+eXqJE99y5pYbO6E+z1px7bbyx+1YvvRTg+b9inSUXo9DFOYtS2HOCmp5Pa0yNG9sc+jOKhwOheiwruS53szq3NfRsIHsILr95RCroF0+bCUrlRBFB82MvpRSmPkHLa474vnqsZOZYffo4lFsNS9798pe/APvv78JfeMFTH6GqTRCiAVpeOkniSrWWBb5aebPnXHFFLxYhXmz5r1b6Nh6ezFBoj5grsLbZBuAE24KKQx9vIw0KKr5EgkCtG3/4Yf2vlaIOpaRstmt5LfBMpsfq3duxinrcY8cCNM6qQKCNdhrpf/BBFy+oS5X6mM7vnKxaGRZYDb77r1o10xqWDLBoGEOJsilLlA0dckj9hu+tcdt6NS+7dQPsdXUZsOwb8+VOZiicObO0Mpy3jBnj3UcTxW0KUQKL9+Fob8phlfO+jAJxIBlgjRpV+HJ4awMFpr/6Vf2TbG1ulMCywyBv+8ooMAeSGQo/+sgzdr/qqt6VbJSkR012FWgvFghaDnsqvcGLaTNgBeXgj/GTAZZWjcLRuIgiBiV7yaX6+X3yNI+KGbg/yQsEMirmQM2RrmaE4hxT+9sCS4+dhansvvu6VByyK52kdrHamusl3rVWq9EZsIo5ZC8Kz4bBYu7wN4eGmntbYYCV7PBZrmnl/GjHU/fy7IHQcnEr+VHartcBU6WFB2EzKuZAp2KPcr/DAOt9AAlcHVquulX8CCqVuHOFaAWmVZIVBPH+PyWe5E7ionAtr3meC/xUNQyweCY8wLXvfqoRUZwFps06AQ+StZ1fJXGfc5C6pSfu0zmg6B6+0sqFAdbXAJ4vzSoFPhZYek+y32rxplJrliibX1XinPl6K0UBwgCLEzdjPKpy5omHWJtWVjfLT0WGDHGxpk0D5s93vzOX5UAV9V8XLTCwct6KYLLLIkWud95xlbEb3863suvgg13YhAnOnbksBzhazbIeldyBgZXPaHqlDBvqbyX6QYBFXXm9fJyLgFtuaWgzUlw4ZVgf+6lfWGCxazDdg5+iEohjeyyrA1ar6EMPdTGmTgXmzHG/M5flwF1+Ju5MEBZYXBWmT8hjFQQ5GfdLQ4e6mFlv5XhR6nq41CtiHwEGBdZJj1unm7YklGhau9JpIFsPeykA0/TowcEw+yvlwacCdPYLo7A9FvPntem+lp5+K1N3PCr46TDWrl3tW7dYIJUMlajBakUW6p89yYFxOeArv6wIDawcQDvS4/0WlFi8N95wRW2yiXOXcxF8dm9w3LhysTI/jwM3BmFEaGDlC7kiSGGJxLUnoK16cbnCeWaRJ4VItAmfiRnKcYl+lAJwhPJN9QLrVQC3+y4tiYjWLkS1SypZFx7gUCKoCK6MynHg7ByQrAlnAfqnarJrbwKjXatKhmLpb68yod320glr5ge8KcBS5dAWq58AOQHGp+ql8Ko2JRqHKwcY3gihxBszysXJ/MiX3WIFULXMBeiXqhdjL5CksTS93kSBwtu3bG/F+BqWPS0vnhGgXbV3H3uYABek5uVQnsX7AZXefVdkt908azG8f9reoEoLy37kXW0TcMZaXuwQKl+AAF0FmJsacHGuZe18Ksjsk1fObb65/UIzt/uAzin/phvgK8DA1ACLDOLF4Nb+vAUVey1awXGMzNyOFx8KsHQDIFS5SAFOSdXL4oUDvIiS5pN4uwTvaKZx3OaxUpw04BcLkL8wsfJ7rhWSqxUhaDhXiQBuA2A054LmksVvIAcG5yJQMIgcWGSIALySlLo7azWQQVnRwTkwMgdcFDxZaYp6Je+lOeLHLosi7C1Tt0ldtraZZ54DBNTFUXEjlh5LKyfAKgBeA9BN/bJnKjkwFsDRfpX4/LQglh5LC84B8wCsC++p3tkzXRxgT3VUlKBi82IFFgvIATzu0g9A/NqH6XphzVCbETmA86ofoq5s7MDKg+tLADsDOC/qBmT5heIANRW2zgFXh0rtI1Gsc6xy5YsHsEnlwjK/RDjwLwC752LW/k2kx7LsygG0YEs719nQaBmTjPt4AJvHDSo2JfEeS/mXF6TSGFW6FAW1gq315K1YB+SAt5JqVuI9ljaMJ6pzAI8cLwdgtPpnz0g5QHkiTehsmiSoIm1BvZkJ0EeAa1O1z+g2ZZPer6u3PO73HSdA+3rfS8ukF6CXAKMzgIU62zhHgMMyQFX5HAToIsBgAe7PQFYTZPwQB+TnrVW4mlxQwybvQZoo3jyMe488VmPOwwfJpaXickfjBgATAczIAYvT1rqmAJZlmni3wlJrYjMAg7jagadNYaO1mptXY1D2N4VAAvBe3pxUatvZdMAqx8l8j7Y6gL75v14AeDMUb8bsDoBhaSVKwWkAn7cqvJd/vg5gdt49PwcsSmvls3plHEiUA/8F6FO9olga5nQAAAAASUVORK5CYII="/>
    </defs>
    </svg>    
  );
}