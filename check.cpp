#include <bits/stdc++.h>
using namespace std;
int main()
{
    //------------------------bai 3----------------------------------------

    string s = "", res = "";
    int ans = 1;
    cin >> s;
    int n = s.length();
    for (int i = 0; i < n; i++)
    {
        res += s[i];
        for (int j = i + 1; j < n; j++)
        {
            if (res.find(s[j]) != string::npos)
            {
                ans = max(ans, (int)res.length());
                // cout << "res: " << res << endl;
                res = "";
                break;
            }
            else
                res += s[j];
        }
    }
    cout << ans << endl;
    return 0;
}